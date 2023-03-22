import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('api_users', 'root', 'luci11235813', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
