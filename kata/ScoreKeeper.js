class ScoreKeeper {
    scoreTeamA = 0
    scoreTeamB = 0
    score = '000:000'
    log(){
        console.log('OK class importée')
        return 'OK'
    }
    getScore(){
        this.buildStringScore();
        return this.score;
    }
    buildStringScore(){
        this.score=this.scoreTeamA.toString().padStart(3,'0')
                    +':'
                    +this.scoreTeamB.toString().padStart(3,'0');
    }
    scoreTeamA1(){
        this.handleScoreTeam('scoreTeamA',1);
    }
    scoreTeamA2(){
        this.handleScoreTeam('scoreTeamA',2);
    }
    scoreTeamA3(){
        this.handleScoreTeam('scoreTeamA',3);
    }
    scoreTeamB1(){
        this.handleScoreTeam('scoreTeamB',1);
    }
    scoreTeamB2(){
        this.handleScoreTeam('scoreTeamB',2);
    }
    scoreTeamB3(){
        this.handleScoreTeam('scoreTeamB',3);
    }
    handleScoreTeam(scoreTeam,num){
        this[scoreTeam] += num ;
    }
}

module.exports = ScoreKeeper;