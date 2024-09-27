import classNames from 'classnames';

export default function Burger({opened , toggleOpened}) {

  return (
     <div onClick={toggleOpened} className={classNames(`tham tham-e-squeeze tham-w-7`, { 'tham-active': opened })}>
      <div className="tham-box">
        <div className="tham-inner bg-white" />
      </div>
     </div>
     );
}