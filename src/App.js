import Time from './components/Time';
import LikeButton from './components/LikeButton';
import Avatar from './components/Avatar';
import Author from './components/Author';
import Message from './components/Message';
import RetweetButton from './components/RetweetButton';
import MoreOptionsButton from './components/MoreOptionsButton';
import ReplyButton from './components/ReplyButton';

function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
