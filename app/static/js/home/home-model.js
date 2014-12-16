angular.module('job_quiz')

  .factory('HomeFactory', [function () {
      asks = [
        {
        number: 1,
        question: "ask1",
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
        question: "ask2",
        answers: [
          {
            answer: 'answers21',
            correct: false
          },
          {
            answer: 'answers22',
            correct: true
          },
          {
            answer: 'answers23',
            correct: false
          },
          {
            answer: 'answers24',
            correct: false
          },
          {
            answer: 'answers25',
            correct: false
          }
        ]}
      ];
    return asks
}]);
