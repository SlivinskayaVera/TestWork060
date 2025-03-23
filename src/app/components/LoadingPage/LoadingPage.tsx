import style from './LoadingPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={style.loader_container}>
      <div className={style.loader}></div>
    </div>
  );
};

export default LoadingPage;
