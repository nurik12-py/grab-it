import YandexMaps from "../components/YandexMaps";

import { FC, useEffect, useState } from "react";
import { getFridges } from "../services/fridgeService";
import { connect } from "../store/core/Connect";
import { updateFridge } from "../store/reducers/fridgeReducer";

interface Props {
  fridges: any[];
  setFridges: (action: any) => void;
}

const Home: FC<Props> = ({ fridges, setFridges }) => {
  useEffect(() => {
    getFridges().then((res) => {
      const { data } = res;
      setFridges(data);
    });
  }, []);
  return <YandexMaps fridges={fridges} />;
};

const mapStateToProps = (state: any) => {
  return {
    fridges: state.fridges,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  setFridges: (fridges: any[]) => {
    dispatch(updateFridge(fridges));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
