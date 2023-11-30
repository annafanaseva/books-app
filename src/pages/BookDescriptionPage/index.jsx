import { useParams } from 'react-router-dom';

import BookDetails from '../../components/BookDetails';

//import styles from './BooksDescriptionPage.module.scss';

const BooksDescriptionPage = () => {
  const { id } = useParams();

  return (
    <>
      <BookDetails id={id} />
    </>
  );
};

export default BooksDescriptionPage;
