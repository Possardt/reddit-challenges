const readFile               = require('fs-readfile-promise');
const writeFile              = require('write');
const challengeFileTemplates = require('./challengeFileTemplates');

const difficultyRegex = /\[(Easy|Intermediate|Hard|Random)\]\s/;

let archiveContents,
    challengeName;

determineChallengeName = name => {
  return (name.split(difficultyRegex))[2]
    .trim()
    .toLowerCase()
    .split(' ')
    .join('_') + '.js';
}

determineChallengeFolder = name => {
  return name.indexOf('Easy') !== -1 ? 'easy' :
    name.indexOf('Intermediate') !== -1 ? 'intermediate' :
    name.indexOf('Hard') !== -1 ? 'hard' :
    name.indexOf('Random') !== -1 ? 'random' : '';
}

readFile('src/challenge.js', 'utf-8')
  .then(contents => {
    let challengeWithoutExport = contents
      .split('\n')
      .filter(line => {
        if(line.match(difficultyRegex)){
          challengeName = line;
        }
        return line !== 'module.exports = challenge;'
      })
      .join('\n');
    archiveContents = challengeWithoutExport;
    return readFile('src/challenge.spec.js', 'utf-8');
  })
  .then(contents => {
    let testWithoutChallengeImport = contents
      .split('\n')
      .filter(line => line !== 'const challenge = require(\'./challenge\');')
      .join('\n');

    return archiveContents += testWithoutChallengeImport;
  })
  .then(completeArchiveContents => {
    let fileName      = determineChallengeName(challengeName);
        archiveFolder = determineChallengeFolder(challengeName);

    return writeFile('archive/' + archiveFolder + '/' + fileName, completeArchiveContents);
  })
  .then(() => {
    let writeFiles = [
      writeFile('src/challenge.js', challengeFileTemplates.challengeJS),
      writeFile('src/challenge.spec.js', challengeFileTemplates.challengeSpecJS)
    ];

    return Promise.all(writeFiles);
  })
  .catch(err => console.error(err));
