import { ReactComponent as HtmlIcon } from '../../shared/images/HtmlIcon.svg';
import { ReactComponent as ImageIcon } from '../../shared/images/ImageIcon.svg';
import { ReactComponent as WebIcon } from '../../shared/images/WebIcon.svg';
// I'm used to importing them without ReactComponent but create-react-app's webpack does weird things. Also acknowledging the expectation that slide content/thumbnail would come from api


const SlideIconMap = {
  HTML: HtmlIcon,
  Image: ImageIcon,
  Web: WebIcon,
}

const getSlideImage = (slideContent) => SlideIconMap[slideContent];

export default getSlideImage;
