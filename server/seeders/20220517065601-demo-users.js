'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: '배윤호',
        email: 'wnrhd45@gmail.com',
        password: '1234',
        github_url: 'https://github.com/ProjectBYH',
        user_comment: 'back-end',
        email_chk: 1,
        bookmark: 1,
        admin: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        id: 2,
        name: '서진석',
        email: 'realsonya7@gmail.com',
        password: '1234',
        github_url: 'https://github.com/realsonya7',
        user_comment: 'front-end',
        email_chk: 1,
        bookmark: 2,
        admin: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        id: 3,
        name: '정다희',
        email: 'hedaa2027@gmail.com',
        password: '1234',
        github_url: 'https://github.com/sowookim',
        user_comment: 'front-end',
        email_chk: 1,
        bookmark: 3,
        admin: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        id: 4,
        name: '정무공',
        email: 'mugong1203@naver.com',
        password: '1234',
        github_url: 'https://github.com/plutio1592',
        user_comment: 'back-end',
        email_chk: 1,
        bookmark: 4,
        admin: 1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        id: 5,
        name: '김코딩',
        email: 'test1@gmail.com',
        password: '1234',
        github_url: 'https://github.com/test1',
        user_comment: '테스트계정',
        email_chk: 0,
        bookmark: 5,
        admin: 0,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
