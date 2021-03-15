import {indexOf as lodashTest} from 'lodash'

function AwesomeComponent(props) {
  //!это просто комментарий чтобы создать коммит?
  return (
    <span>
        Я работаю!<br/><br/>
        {props.text}<br/><br/>
        {lodashTest && 'А еще здесь есть lodash!'}
    </span>
  );
}

export default AwesomeComponent;