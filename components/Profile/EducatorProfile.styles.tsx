import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    profile:{
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(111, 136, 129, 0.1)',
        '& div':{
            margin: '10 0',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
        },
    },
    moreInfo:{
        '& li':{
            listStyle: 'none',
            display: 'flex',
            width: '450px',
            margin: '20px 0',
          '& h6':{
              marginRight:40,
              color:'gray',
              fontFamily: 'Roboto',
              width: '70px',
              fontSize: '15px'
          },
          '& h6:last-child':{
            justifyContent: 'flex-start',
            display: 'flex',
            textAlign: 'left',
            margin: 'auto',
            width: '200px',
            color:'black',
          }

        }
    },
    profileHead:{
        '& h3':{
            color: 'green',
            font: 'normal 600 30px/24px Roboto',
            marginBottom: 20,
            marginTop: 40,
            textAlign:'center'
        },
        '& button':{
            width:150,
            height:140,
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            marginTop:'-20px',
            '& h1':{
                fontSize:60
            }
        }

    },
    uploadphoto:{
        '& button':{
            margin: '-10px auto 0px auto',
            display: 'flex',
            justifyContent:'center'
        }
    },
    status:{
        margin: '40px 0px 0px 40px',
        '& h3':{
            color: 'lightGreen',
            fontFamily:'Roboto',
            fontSize:16,
            marginBottom: 20
        },
        '& li':{
            color: 'black',
            margin: '-20px 0px 0px 15px'
        }
    },
    btnGrp:{
        '& button':{
            margin: '8px auto'
        }
    }

})

