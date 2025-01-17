import { connect } from "react-redux";
import {
  handleFetchBooks,
  handleMessageBox,
  handleMessage,
} from "../../redux/actions/manager";
import {
  handleDeleteDialog,
  handleActionDialog,
} from "../../redux/actions/book";
import {
  handleFetchBookmarks,
  handleFetchNotes,
} from "../../redux/actions/reader";
import { stateType } from "../../redux/store";
import { withNamespaces } from "react-i18next";
import DeleteDialog from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    books: state.manager.books,
    isOpenDeleteDialog: state.book.isOpenDeleteDialog,
    currentBook: state.book.currentBook,
    bookmarks: state.reader.bookmarks,
    notes: state.reader.notes,
    digests: state.reader.digests,
    mode: state.sidebar.mode,
    shelfIndex: state.sidebar.shelfIndex,
  };
};
const actionCreator = {
  handleFetchBooks,
  handleDeleteDialog,
  handleFetchBookmarks,
  handleFetchNotes,
  handleMessageBox,
  handleMessage,
  handleActionDialog,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withNamespaces()(DeleteDialog as any));
