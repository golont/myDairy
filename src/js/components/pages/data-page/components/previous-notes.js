import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "./../../../../redux/actions/actions";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import Notes from "../../../notes";

const PreviousNotes = ({
    pageCount,
    handlePageChange,
    posts,
    postsPerPage,
    currentPage
}) => {
    if (posts.length < 1)
        return (
            <h2 className="title title-data-page data-page__wrapper-previous-notes">
                No previous notes yet.
            </h2>
        );

    return (
        <div className="data-page__wrapper data-page__wrapper-previous-notes">
            <div className="data-page__wrapper-title">
                <h2 className="title title-data-page">Previous notes</h2>
                <div
                    className="icon-arrow-down data-page__arrow"
                    data-aos="fade-down"
                    data-aos-offset="-100"
                    data-aos-duration="1000"
                ></div>
            </div>
            <Notes
                currentPage={currentPage}
                posts={posts}
                postsPerPage={postsPerPage}
            />
            {pageCount > 1 ? (
                <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pagination__number"}
                    activeClassName={"active"}
                />
            ) : (
                ""
            )}
        </div>
    );
};

PreviousNotes.propTypes = {
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number,
    postsPerPage: PropTypes.number,
    PageCount: PropTypes.number,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            text: PropTypes.string
        })
    )
};

const PreviousNotesContainer = () => {
    const dispatch = useDispatch();
    const {
        pagination: { currentPage, postsPerPage },
        previousPosts
    } = useSelector(state => state.data);

    const handlePageChange = ({ selected }) => {
        dispatch(setCurrentPage(selected + 1));
    };

    const PageCount = Math.ceil(previousPosts.length / postsPerPage);

    return (
        <PreviousNotes
            pageCount={PageCount}
            posts={previousPosts}
            handlePageChange={handlePageChange}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
        />
    );
};

export default PreviousNotesContainer;
