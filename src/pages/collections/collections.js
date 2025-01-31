
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import React from 'react'
import {Fade, Stack, Grid} from "@mui/material";
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';

function Collections() 
{
  const {t} = useTranslation();
  return (
    
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
        <Stack direction="column" height="100%" width={{md:"75%", xs:"100%"}}>
          <PageHeader weight={t("NavBar.Collections.length")}>{t("NavBar.Collections.title")}</PageHeader>
          <PageContent>{t("General.ComingSoon")}</PageContent>
        </Stack>
      </Fade>
    </Stack>
  )
}export default Transition(Collections);


