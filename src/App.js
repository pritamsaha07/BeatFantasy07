import React, { useState } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import styles from "./VenueStats.module.css";

function App() {
  const handleHover = (event) => {
    const navItems = document.querySelectorAll('.navbar li');
    const navItemWidth = navItems[0].offsetWidth;
    const navItemOffset = event.target.parentElement.offsetLeft;
    const redLine = document.querySelector('.red-line');

    redLine.style.width = `${navItemWidth}px`;
    redLine.style.left = `${navItemOffset}px`;
  };

  const handleLeave = () => {
    const redLine = document.querySelector('.red-line');
    redLine.style.width = '0';
  };

  return (
    <div className="App">
      <nav className="navbar" onMouseLeave={handleLeave}>
      <ul>
        <li onMouseEnter={handleHover}><a href="#">AI Team</a></li>
        <li onMouseEnter={handleHover}><a href="#">Predictions</a></li>
        <li onMouseEnter={handleHover}><a href="#">Stats</a></li>
        <li onMouseEnter={handleHover}><a href="#">Experts</a></li>
      </ul>
      <div className="red-line"></div>
    </nav>
      <div>
      <Card sx={{ maxWidth: 2045 }}>
      <CardContent>
      <main  >
      <section className={styles.venueStats}>
      <div className={styles.locationDetails}>
        <div className={styles.location}>
          <div className={styles.venue}>Venue</div>
          <div className={styles.bengaluruIndia}>(Bengaluru, India)</div>
          <div className={styles.bengaluruIndia} style={{paddingTop:'10px'}}>M.Chinnaswamy Stadium, Bengaluru
          </div>
        </div>
        <div className={styles.additionalDetails} style={{padding:'40px'}}>
          <div className={styles.infoContainer}>
        
          </div>
        </div>
      </div>
      <div className={styles.venuePerformance}>
        <div className={styles.performanceMetrics}>
         
          <div className={styles.runDetails1}>
            <div className={styles.venueStats3}>
              <div className={styles.pitchParent}>
              <div className={styles.weather}>Avg Runs</div>
                <div className={styles.sunny}>162</div>
              </div>
              <img
                className={styles.additionalStatIcon}
                alt=""
                src="/additional-stat@2x.png"
              />
              <img
                className={styles.additionalStatIcon1}
                alt=""
                src="/additional-stat.svg"
                
              />
            </div>
            <div className={styles.venueStats4}>
              <div className={styles.weatherParent}>
                <div className={styles.weather}>Good For</div>
                <div className={styles.sunny}>Pacers</div>
              </div>
              <img
                className={styles.additionalStatIcon2}
                alt=""
                src="/frame-427322929-1@2x.png"
              />
              <img
                className={styles.additionalStatIcon3}
                alt=""
                src="/additional-stat1@2x.png"
              />
            </div>
          </div>
          <div className={styles.runDetails1}>
            <div className={styles.venueStats3}>
              <div className={styles.pitchParent}>
                <div className={styles.pitch}>Pitch</div>
                <div className={styles.balanced}>Balanced</div>
              </div>
              <img
                className={styles.venueStatsChild}
                loading="lazy"
                alt=""
                src="/frame-427322929-2@2x.png"
              />
              <img
                className={styles.venueStatsItem}
                alt=""
                src="/frame-427323167@2x.png"
              />
            </div>
            <div className={styles.venueStats4}>
              <div className={styles.weatherParent}>
                <div className={styles.weather}>Weather</div>
                <div className={styles.sunny}>Sunny</div>
              </div>
              <img
                className={styles.venueStatsInner}
                alt=""
                src="/frame-427322929-3@2x.png"
              />
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-427323170.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
      </CardContent>
     </Card>
      </div>
     
      

        <div >
        <Card>
        <div className={styles.trendsTitle}>
        <div className={styles.recentMatchesParent}>
          <div  className={styles.last5Recent} style={{paddingLeft:'15px'}}><b>Avg Dream Team Points</b></div>
          <div className={styles.last5Recent} style={{paddingLeft:'15px'}}>Last 5 matches in this venue</div>
          <div style={{paddingLeft:'15px'}}>620 pts</div>
        </div>
              </div>
            
             
          <CardContent>
        
          <div className={styles.pieChartContainer}>
  <PieChart 
    series={[
      {
        data: [
          { id: 0, value: 372, color:'#FF9933', label: 'Bat: 372 pts' },
          { id: 1, value: 248, color:'yellow', label: 'Bowl: 248 pts' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
</div>
          </CardContent>
        
          </Card>

          
        </div>

        <Card >
          <CardContent>
          <div className={styles.tossTrend}>
          <div className={styles.trendsContainer}>
            <div className={styles.trendsHeader}>
              <div className={styles.trendsTitle}>
                <div className={styles.tossTrends}>Toss Trends</div>
                <div className={styles.howTeamsPerform}>
                  how teams perform after toss is made?
                </div>
              </div>
              <div className={styles.trendsVisualization}>
                <div className={styles.winVisualization}>
                  <div className={styles.outcomeComparison}>
                    <img
                      className={styles.sportsCricketBatIcon}
                      loading="lazy"
                      alt=""
                      src="/sports-cricket-bat.svg"
                    />
                    <div className={styles.winsBattingFirst}>
                      Wins Batting first
                    </div>
                  </div>
                  <div className={styles.outcomeDivider}>60%</div>
                </div>
                <div className={styles.winVisualization1}>
                  <div className={styles.sportsCricketBallParent}>
                    <img
                      className={styles.sportsCricketBallIcon}
                      alt=""
                      src="/sports-cricket-ball.svg"
                    />
                    <div className={styles.winsChasing}>Wins Chasing</div>
                  </div>
                  <div className={styles.div}>40%</div>
                </div>
              </div>
            </div>
            <img
              className={styles.arrowUpKeyIcon1}
              alt=""
              src="/arrow-up-key.svg"
            />
          </div>
        </div>
          </CardContent>
        </Card>
        
        <div >
        <Card >
          <CardContent>
          <div className={styles.barCharts}>
          <div className={styles.wicketSummary}>
            <div className={styles.wicketDetails}>
              <img
                className={styles.cricketStumpIcon}
                loading="lazy"
                alt=""
                src="/cricket-stump.svg"
              />
              <div className={styles.wicketLabel}>
                <div className={styles.totalWickets} style={{paddingRight:'40px'}}>Total Wickets</div>
              </div>
            </div>
            <div className={styles.overallSummary}>14</div>
          </div>
          </div>



          
          </CardContent>
          <CardContent style={{paddingLeft:'130px'}}>
        
       
          <div className="progress-bars-container">
      <div className="progress-bar">
        <Typography gutterBottom variant="h5" component="div">
          My Pacers: 5
        </Typography>
        <div className="wickets-line">
          <div className="progress-line" style={{ width: '35%' }}></div>
        </div>
      </div>
      <div className="progress-bar">
        <Typography gutterBottom variant="h5" component="div">
          My Spinners: 9
        </Typography>
        <div className="wickets-line">
          <div className="progress-line" style={{ width: '64.28%' }}></div>
        </div>
      </div>
    </div>


        </CardContent>
        

        </Card>
        
        </div>

        

        <Card >
          <CardContent>
          <section className={styles.recentMatches}>
      <div className={styles.matchesContainer}>
        <div className={styles.recentMatchesParent}>
          <div className={styles.recentMatches1}>Recent Matches</div>
          <div className={styles.last5Recent}>Last 5 recent matches</div>
        </div>
        <div className={styles.matchDetailsContainer}>
          <img
            className={styles.infoIcon}
            loading="lazy"
            alt=""
            src="/info.svg"
          />
        </div>
      </div>
      <div className={styles.matchHistory}>
        <div className={styles.accordianRecentMatches}>
          <div className={styles.teamPerformance}>
            <div className={styles.teamDetails}>
              <div className={styles.afg}>AFG</div>
              <div className={styles.matchOutcomes}>
                <div className={styles.winLoss}>
                  <div className={styles.w}>W</div>
                </div>
                <div className={styles.winLoss1}>
                  <div className={styles.l}>L</div>
                </div>
                <div className={styles.winLoss2}>
                  <div className={styles.w1}>W</div>
                </div>
                <div className={styles.winLoss3}>
                  <div className={styles.l1}>L</div>
                </div>
                <div className={styles.winLoss4}>
                  <div className={styles.w2}>W</div>
                </div>
              </div>
            </div>
            <img
              className={styles.arrowUpKeyIcon}
              loading="lazy"
              alt=""
              src="/arrow-up-key.svg"
            />
          </div>
        </div>

        <div className={styles.versusMatchSummaries}>
       
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>183/8</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt2}>vs PAK</div>
              </div>
              <div className={styles.result}>PAK won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>183/8</div>
            </div>
          </div>
         
        </div>
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>(20)</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt2}>vs PAK</div>
              </div>
              <div className={styles.result}>PAK won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>(20)</div>
            </div>
          </div>
         
        </div>
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>(20)</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt2}>vs PAK</div>
              </div>
              <div className={styles.result}>AFG won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>(20)</div>
            </div>
          </div>
         
        </div>
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>(20)</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt2}>vs PAK</div>
              </div>
              <div className={styles.result}>PAK won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>Overs</div>
            </div>
          </div>
         
        </div>
        <footer className={styles.menuTileRecentMatches2}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.scoreParent}>
                <div className={styles.score2}>183/8</div>
                <div className={styles.badge2}>
                  <div className={styles.badgeItem} />
                </div>
              </div>
              <div className={styles.overs2}>(20)</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.badgeParent}>
                <div className={styles.badge3}>
                  <div className={styles.badgeInner} />
                </div>
                <div className={styles.vsTxt2}>vs PAK</div>
              </div>
              <div className={styles.result1}>AFG won by 7 wkts</div>
            </div>
            <div className={styles.scoreGroup}>
              <div className={styles.score3}>183/8</div>
              <div className={styles.overs3}>(20)</div>
            </div>
          </div>
         
        </footer>
       
       
      </div>
    
        
        <div className={styles.accordianRecentMatches1}>
          <div className={styles.teamInfo}>
            <div>IND</div>
            <div className={styles.matchHistory1}>
              <div className={styles.winLoss5}>
                <div className={styles.w3}>W</div>
              </div>
              <div className={styles.winLoss6}>
                <div className={styles.w4}>W</div>
              </div>
              <div className={styles.winLoss7}>
                <div className={styles.l2}>L</div>
              </div>
              <div className={styles.winLoss8}>
                <div className={styles.l3}>L</div>
              </div>
              <div className={styles.winLoss9}>
                <div className={styles.w5}>W</div>
              </div>
            </div>
          </div>
          <img
            className={styles.arrowDownKeyIcon}
            loading="lazy"
            alt=""
            src="/arrow-down-key.svg"
          />
        </div>
      </div>
     
    </section>

          </CardContent>
        </Card>
        
        
       
           <Card  >
          <CardContent>
          <div >
          <h3>Recent Matches</h3>
          <div className={styles.last5Recent}>Last 5 recent matches</div>
        </div>
          <div className={styles.matchStatsSummary} style={{padding:'20px'}}>
      <div className={styles.statistics}>
        <div className={styles.venueStats}>
          <div className={styles.matchFrequency}>
            <div className={styles.totalMatchesPlayed}>
              Total Matches played
            </div>
            <div className={styles.totalLabel}>5</div>
          </div>
          <img
            className={styles.statisticDetailsIcon}
            alt=""
            src="/frame-427322929-4@2x.png"
          />
          <img
            className={styles.additionalStatsIcon}
            loading="lazy"
            alt=""
            src="/frame-427323171.svg"
          />
        </div>
      </div>
      <div className={styles.barCharts}>
        <div className={styles.chartLabels}>
          <div className={styles.avgFantasyPoints}>Matches Won</div>
          <div className={styles.averageLabel}>4 : 1</div>
        </div>
        <div className={styles.teamComparison}>
          <div className={styles.teamScoresChart}>
          <div className="progressLine">
                  <div className="blueProgress" style={{ width: '80%' }}></div> 
                  <div className="redProgress" style={{ width: '20%' }}></div> 
                </div>
          </div>
          
        </div>
      </div>
      
    </div>
    <div className={styles.statisticLabels} style={{paddingLeft:'20px'}}>
        <div className={styles.venueStats1}>
          <div className={styles.labelContainers}>
            <input
              className={styles.textLabel}
              placeholder="Tie/ Draw"
              type="text"
            />
            <div className={styles.labelDetails}>0</div>
          </div>
        </div>
        <div className={styles.venueStats2}>
          <div className={styles.textLabelParent}>
            <input
              className={styles.textLabel1}
              placeholder="No Result"
              type="text"
            />
            <div className={styles.div}>0</div>
          </div>
        </div>
      </div>
          </CardContent>
        </Card>

        <div>
          <Card>
            <CardContent>
              <div className={styles.accordianRecentMatches}>
      <div className={styles.teamInformation}>
        <div className={styles.teamNameContainer}>
          <div className={styles.afg}>Recent H2H matches</div>
          
        </div>
        <img className={styles.arrowUpKeyIcon} alt="" src="/arrow-up-key.svg" />
      </div>
      <div className={styles.versusMatchSummaries}>
        <div className={styles.menuTileRecentMatches}>
          <div className={styles.team1}>AFG</div>
          <div className={styles.team2}>IND</div>
        </div>
        <div className={styles.menuTileRecentMatches1}>
          <div className={styles.matchData}>
            <div className={styles.scoringSummary}>
              <div className={styles.teamScoresCard}>
                <div className={styles.score}>183/8</div>
                <div className={styles.badge}>
                  <div className={styles.scoreShapes} />
                </div>
              </div>
              <div className={styles.overs}>Overs</div>
            </div>
            <div className={styles.matchOutcomeSummary}>
              <div className={styles.teamVersus}>
                <div className={styles.badge1}>
                  <div className={styles.badgeChild} />
                </div>
                <div className={styles.vsTxt}>{`vs `}</div>
              </div>
              <div className={styles.result}>AFG won by 7 wkts</div>
            </div>
            <div className={styles.opponentScoresCard}>
              <div className={styles.score1}>183/8</div>
              <div className={styles.overs1}>Overs</div>
            </div>
          </div>
          <img
            className={styles.arrowRightAltIcon}
            alt=""
            src="/arrow-right-alt.svg"
          />
        </div>
        <footer className={styles.menuTileRecentMatches2}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.scoreParent}>
                <div className={styles.score2}>183/8</div>
                <div className={styles.badge2}>
                  <div className={styles.badgeItem} />
                </div>
              </div>
              <div className={styles.overs2}>Overs</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.badgeParent}>
                <div className={styles.badge3}>
                  <div className={styles.badgeInner} />
                </div>
                <div className={styles.vsTxt1}>{`vs `}</div>
              </div>
              <div className={styles.result1}>IND won by 7 wkts</div>
            </div>
            <div className={styles.scoreGroup}>
              <div className={styles.score3}>183/8</div>
              <div className={styles.overs3}>Overs</div>
            </div>
          </div>
          
        </footer>
        
      </div>
    </div>
            </CardContent>
          </Card>
        </div>
  </div>
    
  );
}

export default App;
