import React, { useEffect } from "react";
import { useParams } from "react-router";

import Bio from "./components/Bio";
import BioImage from "./components/BioImage";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import { searchBio } from "../../redux/actions/superHero";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { biographySel, isLoadingSel, errorSel } from "../../redux/selector";

export default function Biography() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const biography = useSelector(biographySel, shallowEqual);
  const isLoading = useSelector(isLoadingSel, shallowEqual);
  const error = useSelector(errorSel, shallowEqual);

  useEffect(() => {
    if (id) dispatch(searchBio(id));
  }, [id, dispatch]);

  return (
    <div>
      <Header />
      <div className="px-4 py-3 mt-10">
        {isLoading && <Spinner />}
        {!isLoading && !error && biography?.bio && (
          <>
            <BioImage image={biography?.photo?.url} alt={biography?.bio?.["full-name"]} />
            <Bio {...biography} />
          </>
        )}
      </div>
    </div>
  );
}
