import { images } from '../../constants'
import './Brand.css'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={images.google} alt="brand google" />
    </div>
    <div>
      <img src={images.slack} alt="brand slack" />
    </div>
    <div>
      <img src={images.atlassian} alt="brand atlassian" />
    </div>
    <div>
      <img src={images.dropbox} alt="brand dropbox" />
    </div>
    <div>
      <img src={images.shopify} alt="brand shopify" />
    </div>
  </div>
  )
}

export default Brand