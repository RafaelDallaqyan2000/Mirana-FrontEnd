import { Box } from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import PageButtons from "./PageButtons";
import "./Pagination.css";

export function Pagination({ countUsers, countOfPage, pathname }) {
  let { page = "1" } = useParams();
  page = +page;
  const countButtons = Math.ceil(countUsers / countOfPage);
  const arr = new Array(countButtons).fill();
  return (
    <div className="divPag">
      {page !== 1 ? (
        page !== 2 ? (
          <NavLink to={`/${pathname}/${page - 1}`}>
            <Box> &lt; </Box>
          </NavLink>
        ) : (
          <NavLink end to={`/${pathname}`}>
            <Box> &lt; </Box>
          </NavLink>
        )
      ) : (
        <Box> &lt; </Box>
      )}
      {countButtons <= 9 ? (
        <PageButtons n={1} count={arr.length} pathname={pathname} />
      ) : countButtons > 9 ? (
        <>
          <PageButtons n={1} count={3} pathname={pathname} />

          {page === 3 ? (
            <PageButtons n={4} count={1} pathname={pathname} />
          ) : (
            ""
          )}
          {page === 4 ? (
            <PageButtons n={4} count={2} pathname={pathname} />
          ) : (
            ""
          )}
          {page === 5 ? (
            <PageButtons n={4} count={3} pathname={pathname} />
          ) : (
            ""
          )}
          <Box> ... </Box>
          {page >= 6 && page <= arr.length - 5 ? (
            <>
              <PageButtons n={page - 1} count={3} pathname={pathname} />
              <Box> ... </Box>
            </>
          ) : (
            <>
              {page === arr.length - 2 ? (
                <PageButtons n={arr.length - 3} count={1} pathname={pathname} />
              ) : (
                ""
              )}
              {page === arr.length - 3 ? (
                <PageButtons n={arr.length - 4} count={2} pathname={pathname} />
              ) : (
                ""
              )}
              {page === arr.length - 4 ? (
                <PageButtons n={arr.length - 5} count={3} pathname={pathname} />
              ) : (
                ""
              )}
            </>
          )}
          <PageButtons n={arr.length - 2} count={3} pathname={pathname} />
        </>
      ) : (
        ""
      )}

      {page !== arr.length ? (
        <NavLink to={`/${pathname}/${page + 1}`}>
          <Box> &gt; </Box>
        </NavLink>
      ) : (
        <Box> &gt; </Box>
      )}
    </div>
  );
}
