import React, {useEffect, useRef} from 'react'
import {Grid, Hidden} from '@material-ui/core'
import Details from './components/Details/Details'
import Main from './components/Main/Main'

import useStyles from './styles'
import {PushToTalkButton,  PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'
import {SpeechState, useSpeechContext} from '@speechly/react-client'

function App() {

  const classes = useStyles()

  const {speechState} = useSpeechContext();

  const main  = useRef()

  const executeScroll = ()=> main.current.scrollIntoView()

  useEffect(()=>{
    if(speechState === SpeechState.Recording){
      executeScroll()
    }
  },[speechState])
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>

        <Hidden smDown>
          <Grid item xs={12} sm={4}>
            <Details title="Income"/>
          </Grid>
        </Hidden>
       
        <Grid ref={main} item xs={12} sm={3} >
          <Main/>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income"/>
          </Grid>
        </Hidden>
       
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
        <ErrorPanel/>
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
