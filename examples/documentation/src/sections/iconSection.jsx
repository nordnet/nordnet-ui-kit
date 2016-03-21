import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Icon from '../../../../src/components/icon/icon';
import './iconSection.scss';

class IconSection extends PureComponent {
  render() {
    const icons = [
      <Icon type="arrowUp" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="arrowDown" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="bell" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="lock" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="print" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="calendar" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="film" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="floppyDisk" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="folder" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="heart" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="key" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="mail" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="mailOpen" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="news" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="star" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="tag" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="search" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="share" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="trash" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="user" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="socialInstagram" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="socialFacebook" stroke="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="socialTwitter" fill="#00a9ec" width={ 16 } height={ 16 } />,
      <Icon type="apartment" stroke="#00a9ec" width={ 16 } height={ 16 } />,
    ];

    const example = (
      <Row>
        {icons.map((icon, index) => (
          <Col key={ `${ icon.props.type }-${ index }` } xs={ 4 } sm={ 3 } lg={ 2 }>
            <div className="icon-container">
              <div className="icon-container__icon">
                { icon }
              </div>
              <div className="icon-container__type">
                { icon.props.type }
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );

    const code = `<Icon type="star" stroke="#00a9ec" width={ 16 } height={ 16 } />`;

    const explanation = 'Use the type prop to specify which icon to use';

    return (
      <Section
        title="Icons"
        description="These are the icons currently exposed by the icon component"
        example={ example }
        code={ code }
        explanation={ explanation }
      />
    );
  }
}

export default IconSection;
