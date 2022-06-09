// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

// {formattedParagraph({ id, length: 2, startingFrom: 1 })}
//         <br />
//         <h5 className={styleClasses.sectionTitle}>
//           <FormattedMessage id='pages.articles.organically-increase-follower.title-2' />
//         </h5>
//         {formattedParagraph({ id, length: 2, startingFrom: 3 })}
//         <br />
//         <h5 className={styleClasses.sectionTitle}>
//           <FormattedMessage id='pages.articles.organically-increase-follower.title-3' />
//         </h5>
//         {formattedParagraph({ id, length: 1, startingFrom: 5 })}
//         <br />
//         <h5 className={styleClasses.sectionTitle}>
//           <FormattedMessage id='pages.articles.organically-increase-follower.title-4' />
//         </h5>
//         {formattedParagraph({ id, length: 1, startingFrom: 6 })}
//         <br />
//         <h5 className={styleClasses.sectionTitle}>
//           <FormattedMessage id='pages.articles.organically-increase-follower.title-5' />
//         </h5>
//         {formattedParagraph({ id, length: 1, startingFrom: 7 })}
//         <Row className='justify-content-center mt-4 mb-4'>
//           <Image
//             src='/../public/placeholder.png'
//             height={518}
//             width={420}
//             alt='Organically Increase Follower - Create carousel post instead of photo post'
//           />
//         </Row>

//         <p style={{ textAlign: 'center' }}>
//           <FormattedMessage
//             id='pages.articles.organically-increase-follower.image-description'
//             values={{
//               samplePost: (
//                 <Link href='https://www.instagram.com/p/CcpwPRprppm/'>
//                   <a target='_blank' rel='noopener noreferrer'>
//                     here
//                   </a>
//                 </Link>
//               ),
//             }}
//           />
//         </p>

//         <FormattedMessage
//           id='pages.articles.organically-increase-follower.paragraph-11'
//           values={{
//             contactUsEmail: (
//               <Link href='mailto:hello@iglinks.io'>
//                 <a target='_blank' rel='noopener noreferrer'>
//                   hello@iglinks.io
//                 </a>
//               </Link>
//             ),
//           }}
//         />
