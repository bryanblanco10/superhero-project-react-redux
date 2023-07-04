import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import ResultsList from "./components/ResultsList";
import NoResults from "./components/NoResults";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { searchHero } from "../../redux/actions/superHero"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  isLoadingSel,
  recordsSel,
  errorSel,
} from "../../redux/selector";

export default function Results() {
  const { searchText } = useParams();
  const dispath = useDispatch();
  const isLoading = useSelector(isLoadingSel, shallowEqual);
  const records = useSelector(recordsSel, shallowEqual);
  const error = useSelector(errorSel, shallowEqual);

  useEffect(() => {
    dispath(searchHero(searchText));
  }, [dispath, searchText]);

  return (
    <div>
      <Header />
      <div className="px-3 pb-2 mt-12">
        <h2 className="text-xl font-bold">Resultados para: {searchText}</h2>
        {isLoading && <Spinner />}
        <ErrorComponent error={error} />
        <ResultsList data={records} />
        {!isLoading && !records?.length && <NoResults />}
      </div>
    </div>
  );
}