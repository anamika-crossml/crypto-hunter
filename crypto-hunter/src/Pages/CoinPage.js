import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../Components/Banner/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../Components/Banner/CoinsTable";
import { CryptoState } from "../CryptoContext";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();
  const theme = useTheme();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="30%"
        borderRight="2px solid grey"
        marginTop={2}
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height={200}
          style={{ marginBottom: 2 }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          marginBottom={2}
          fontFamily="Montserrat"
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          width="100%"
          fontFamily="Montserrat"
          padding={2}
          paddingBottom={1.5}
          paddingTop={0}
          textAlign="justify"
        >
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <Box
          alignSelf="start"
          padding={2}
          paddingTop={1}
          width="100%"
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "flex",
              justifyContent: "space-around",
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "center",
            },
            [theme.breakpoints.down("xs")]: {
              alignItems: "start",
            },
          }}
        >
          <Box display="flex" alignItems="center"  marginBottom={2}  marginTop={2}>
            <Typography variant="h5" fontWeight="bold" marginRight={1} marginLeft={2}>
              Rank:
            </Typography>
            <Typography variant="h5" fontFamily="Montserrat">
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" marginBottom={2}>
            <Typography variant="h5" fontWeight="bold" marginRight={1} marginLeft={2} >
              Current Price:
            </Typography>
            <Typography variant="h5" fontFamily="Montserrat">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" fontWeight="bold" marginRight={1} marginLeft={2}>
              Market Cap:
            </Typography>
            <Typography variant="h5" fontFamily="Montserrat">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </Box>
        </Box>
      </Box>
      <CoinInfo coin={coin} />
    </Box>
  );
};

export default CoinPage;
