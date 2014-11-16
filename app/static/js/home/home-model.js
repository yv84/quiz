angular.module('job_quiz')

  .factory('HomeFactory', [function () {
      asks = [
        {
        number: 1,
        answers: [
          {
            answer: 'answers1',
            correct: false
          },
          {
            answer: 'answers2',
            correct: false
          },
          {
            answer: 'answers3',
            correct: false
          },
          {
            answer: 'answers4',
            correct: false
          },
          {
            answer: 'answers5',
            correct: true
          }
        ]},
        {
        number: '2',
        answers: [
          {
            answer: 'answers1',
            correct: false
          },
          {
            answer: 'answers2',
            correct: true
          },
          {
            answer: 'answers3',
            correct: false
          },
          {
            answer: 'answers4',
            correct: false
          },
          {
            answer: 'answers5',
            correct: false
          }
        ]}
      ];
    return asks
}]);
