import  contactImg1  from '../../assets/img/contactImg1.svg';
import  contactImg2  from '../../assets/img/contactImg2.svg';
import  contactImg3  from '../../assets/img/contactImg3.svg';
import  contactImg4  from '../../assets/img/contactImg4.svg';
import  contactImg5  from '../../assets/img/contactImg5.svg';
import  contactImg6  from '../../assets/img/contactImg6.svg';
import  contactImg7  from '../../assets/img/contactImg7.svg';

const SubscriptionImgs = [
  { imgSrc: contactImg1 },
  { imgSrc: contactImg2 },
  { imgSrc: contactImg3 },
  { imgSrc: contactImg4 },
  { imgSrc: contactImg5 },
  { imgSrc: contactImg6 },
  { imgSrc: contactImg7 },
];

export const Subscription = () => {
  return (
    <section>
      <div className='max-w-7xl flex'>
        {SubscriptionImgs.map((item) => (
          <img className='w-full' key={item.imgSrc} src={item.imgSrc} alt="Images" />
        ))}
      </div>
    </section>
  );
};
