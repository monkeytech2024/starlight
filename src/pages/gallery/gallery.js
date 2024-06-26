import React from 'react'

import {Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import Transition from '../../components/Transition/Transition';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';

function Gallery() 
{
  const {t} = useTranslation();
  return(
  <Stack direction="row" sx={{justifyContent:"center", minHeight:"65vh", backgroundColor:"background.main"}}>
    <Stack direction="column" height="100%" width={{md:"85%", xs:"100%"}}>
      <PageHeader weight={t("NavBar.Gallery.length")}>{t("NavBar.Gallery.title")}</PageHeader>
      <PageContent>{t("General.ComingSoon")} </PageContent>
    </Stack>
  </Stack>
  )
}export default Transition(Gallery);
