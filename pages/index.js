import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import { FormattedMessage } from 'react-intl';
import styleClasses from '../styles/articles.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function Home() {
  const [id, setId] = useState('organically-increase-follower');
  const [count, setCount] = useState({ title: 1, paragraph: 1 });
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState('title');

  const [content, setContent] = useState([]);
  const [lang, setLang] = useState([]);

  const writeTitle = () => {
    setToggle(!toggle);
    setStatus('title');
  };

  const writeParagraph = () => {
    setToggle(!toggle);
    setStatus('paragraph');
  };

  const writeImage = () => {
    setToggle(!toggle);
    setStatus('image');
  };

  const addTitle = () => {
    setCount(prev => ({ ...prev, ['title']: count.title + 1 }));
    setContent([
      ...content,
      { format: 'title', id, count: count.title, title: text },
    ]);
    setText('');
    setToggle(!toggle);
    setLang([
      ...lang,
      `'pages.articles.${id}.title-${count.title}': '${text}'`,
    ]);
  };

  const addParagraph = () => {
    setCount(prev => ({ ...prev, ['paragraph']: count.paragraph + 1 }));
    setContent([
      ...content,
      { format: 'paragraph', id, count: count.paragraph, paragraph: text },
    ]);
    setText('');
    setToggle(!toggle);
    setLang([
      ...lang,
      `'pages.articles.${id}.paragraph-${count.paragraph}': '${text}'`,
    ]);
  };

  console.log(content);

  const addImage = () => {
    setContent([
      ...content,
      { format: 'image', src: '/../public/placeholder.png' },
    ]);
    setText('');
    setToggle(!toggle);
  };

  return (
    <>
      <article className={styleClasses.mainSection}>
        <section className={styleClasses.mainImage}>
          <Image
            src='/../public/placeholder.png'
            height={600}
            width={1200}
            alt='IGLinks.io How To Organically Increase Your Follower Count As An Influencer Image'
          />
        </section>
        <section className={styleClasses.mainTitle}>
          <h3>
            <FormattedMessage id='pages.articles.organically-increase-follower.title-1' />
          </h3>
          <span>
            <FormattedMessage id='pages.articles.organically-increase-follower.publish-date' />
          </span>
        </section>

        {content.map(c => {
          if (c.format === 'title') {
            return <h5 className={styleClasses.sectionTitle}>{c.title}</h5>;
          }

          if (c.format === 'paragraph') {
            return (
              <>
                <p>{c.paragraph}</p>
              </>
            );
          }

          if (c.format === 'image') {
            return (
              <Row className='justify-content-center mt-4 mb-4'>
                <Image
                  src='/../public/placeholder.png'
                  height={200}
                  width={420}
                  alt='Organically Increase Follower - Create carousel post instead of photo post'
                />
              </Row>
            );
          }
        })}
      </article>
      {toggle && (
        <div className={styleClasses.textarea}>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Type your {status}</Form.Label>
              <Form.Control
                onChange={e => setText(e.target.value)}
                value={text}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Button
              onClick={() =>
                status === 'title'
                  ? addTitle()
                  : status === 'paragraph'
                  ? addParagraph()
                  : status === 'image'
                  ? addImage()
                  : setToggle(!toggle)
              }
              style={{
                marginBottom: '20px',
              }}
            >
              Confirm
            </Button>
          </Form>
        </div>
      )}
      <div className={styleClasses.toolbox}>
        <div>
          <Button onClick={() => writeTitle()} variant='outline-primary'>
            Title
          </Button>
        </div>
        <div>
          <Button onClick={() => writeParagraph()} variant='outline-primary'>
            Paragraph
          </Button>
        </div>
        <div>
          <Button onClick={() => writeImage()} variant='outline-primary'>
            Image
          </Button>
        </div>
      </div>
      <div className={styleClasses.content}>
        <>
          <h5>Article Page Codes</h5>
          <hr />
          {content.map(c => {
            if (c.format === 'title') {
              return (
                <>
                  <code>{'<br />'}</code>
                  <br />
                  <code>{'<h5 className={styleClasses.sectionTitle}>'}</code>
                  <br />
                  <code>
                    {`<FormattedMessage id="pages.articles.${id}.title-${c.count}" />`}
                  </code>
                  <br />
                  <code>{'</h5>'}</code>
                  <br />
                </>
              );
            }

            if (c.format === 'paragraph') {
              return (
                <>
                  <code>
                    {`{contentGroup({ length: 1, startingFrom: ${c.count} })}`}
                  </code>
                  <br />
                </>
              );
            }

            if (c.format === 'image') {
              return (
                <>
                  <code>
                    {'<Row className="justify-content-center mt-4 mb-4">'}
                  </code>
                  <br />
                  <code>
                    {`<Image src=${c.src}
                        height={200}
                        width={400}
                        alt=${id} Image
                      />`}
                  </code>
                  <br />
                  <code>{'{</Row>'}</code>
                  <br />
                </>
              );
            }
          })}
        </>
      </div>
      <div className={styleClasses.lang}>
        <>
          <h5>language.js</h5>
          <hr />
          {lang.map(l => {
            return (
              <>
                <code>{l}</code>
                <br />
              </>
            );
          })}
        </>
      </div>
    </>
  );
}
