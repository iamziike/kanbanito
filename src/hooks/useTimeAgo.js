import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ReactTimeAgo from 'react-time-ago';

TimeAgo.addDefaultLocale(en);
const useTimeAgo = () => {
  const getTimeAgo = (date) => {
    return <ReactTimeAgo date={date} locale='en-US' />;
  };

  return getTimeAgo;
};

export default useTimeAgo;
