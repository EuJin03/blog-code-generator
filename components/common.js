import { FormattedMessage } from 'react-intl';
import styleClasses from '../styles/articles.module.scss';

export const formattedParagraph = ({
  id,
  length,
  startingFrom,
  listed = false,
}) => {
  return Array.from({ length }, (_, i) => i + startingFrom).map(number => {
    const values = {
      bold: (
        <span className={styleClasses.highlightedText}>
          <FormattedMessage id={`pages.articles.${id}-${number}-bold`} />
        </span>
      ),
    };

    if (listed) {
      return (
        <li key={number}>
          <FormattedMessage
            id={`pages.articles.${id}.paragraph-${number}`}
            values={values}
          />
        </li>
      );
    }

    return (
      <p key={number}>
        <FormattedMessage
          id={`pages.articles.${id}.paragraph-${number}`}
          values={values}
        />
      </p>
    );
  });
};

export const formattedTitle = (id, titleCount) => {
  return (
    <h5 className={styleClasses.sectionTitle}>
      <FormattedMessage id={`pages.articles.${id}.title-${titleCount}`} />
    </h5>
  );
};
