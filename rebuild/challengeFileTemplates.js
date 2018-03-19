const challengeJS = `/*
  [POST TITLE]

  [POST DESCRIPTION]
*/

const challenge = () => {

};


module.exports = challenge;`;

const challengeSpecJS = `const challenge = require('./challenge');

describe('A challenge', () => {
  it('should work', () => {
    challenge();
    expect(true).toBe(true);
  });

});`;

module.exports = {
  challengeJS     : challengeJS,
  challengeSpecJS : challengeSpecJS
}
