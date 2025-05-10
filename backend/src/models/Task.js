const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('todo', 'inProgress', 'completed'),
    defaultValue: 'todo'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  statusChangeTimestamps: {
    type: DataTypes.JSON,
    defaultValue: {
      todo: new Date(),
      inProgress: null,
      completed: null
    }
  }
}, {
  hooks: {
    beforeUpdate: (task) => {
      if (task.changed('status')) {
        const timestamps = task.statusChangeTimestamps || {};
        timestamps[task.status] = new Date();
        task.statusChangeTimestamps = timestamps;
      }
    }
  }
});

module.exports = Task; 