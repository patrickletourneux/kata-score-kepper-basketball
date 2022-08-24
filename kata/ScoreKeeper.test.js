const ScoreKeeper = require('./ScoreKeeper');

describe('ScoreKeeper class', () => {
    
    const instance = new ScoreKeeper();
    
    beforeEach(() => {
        console.log('beforeEach'); 
        instance.score = '000:000';
        instance.scoreTeamA = 0;
        instance.scoreTeamB = 0;
      })

      describe('log()', () => {
        test('log() return OK', () => {
          expect(instance.log()).toEqual('OK');
        });
      });

      describe('getScore()', () => {
        test('getScore() return 000:000', () => {
          expect(instance.getScore()).toEqual('000:000');
        });
        test('getScore() return 001:000', () => {
          instance.scoreTeamA1();
          expect(instance.getScore()).toEqual('001:000');
        });
        test('getScore() return 006:000', () => {
          instance.scoreTeamA1();
          instance.scoreTeamA2();
          instance.scoreTeamA3();
          expect(instance.getScore()).toEqual('006:000');
        });
        test('getScore() return 000:006', () => {
          instance.scoreTeamB1();
          instance.scoreTeamB2();
          instance.scoreTeamB3();
          expect(instance.getScore()).toEqual('000:006');
        });
        test('getScore() return 006:012', () => {
          instance.scoreTeamB1();
          instance.scoreTeamB2();
          instance.scoreTeamB3();
          instance.scoreTeamB1();
          instance.scoreTeamB2();
          instance.scoreTeamB3();
          instance.scoreTeamA1();
          instance.scoreTeamA2();
          instance.scoreTeamA3();
          expect(instance.getScore()).toEqual('006:012');
        });
      });
});
