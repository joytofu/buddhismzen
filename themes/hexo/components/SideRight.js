import Live2D from '@/components/Live2D'
// import { siteConfig } from '@/lib/config'
// import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
// import CONFIG from '../config'
// import { AnalyticsCard } from './AnalyticsCard'
// import Announcement from './Announcement'
import Card from './Card'
// import Catalog from './Catalog'
// import CategoryGroup from './CategoryGroup'
import { InfoCard } from './InfoCard'
// import LatestPostsGroup from './LatestPostsGroup'
// import TagGroups from './TagGroups'
import Image from 'next/image'

// const HexoRecentComments = dynamic(() => import('./HexoRecentComments'))
const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const {
    post,
    // currentCategory,
    // categories,
    // latestPosts,
    // tags,
    // currentTag,
    // showCategory,
    // showTag,
    rightAreaSlot,
    // notice,
    // className
  } = props

  // const { locale } = useGlobal()

  // 文章全屏处理
  if (post && post?.fullWidth) {
    return null
  }

  return (
    <div
      id='sideRight'
      className={` lg:w-80  ${post ? 'lg:pt-0' : 'lg:pt-4'}`}>

      <div style={{marginBottom: '1rem'}}>
        <InfoCard {...props} />
      </div>

      <div className='sticky top-8 space-y-4'>
        {post && post.toc && post.toc.length > 1 && (
          <Card>
            <Catalog toc={post.toc} />
          </Card>
        )}

      

        {siteConfig('HEXO_WIDGET_ANALYTICS', null, CONFIG) && (
          <AnalyticsCard {...props} />
        )}

        {showCategory && (
          <Card>
            <div className='ml-2 mb-1 '>
              <i className='fas fa-th' /> {locale.COMMON.CATEGORY}
            </div>
            <CategoryGroup
              currentCategory={currentCategory}
              categories={categories}
            />
          </Card>
        )}

        {/* {showTag && (
          <Card>
            <TagGroups tags={tags} currentTag={currentTag} />
          </Card>
        )} */}

        {/* {siteConfig('HEXO_WIDGET_LATEST_POSTS', null, CONFIG) &&
          latestPosts &&
          latestPosts.length > 0 && (
            <Card>
              <LatestPostsGroup {...props} />
            </Card>
        )} */}

        {/* <Announcement post={notice} /> */}

        {/* {siteConfig('COMMENT_WALINE_SERVER_URL') &&
          siteConfig('COMMENT_WALINE_RECENT') && <HexoRecentComments />} */}

        {/* <Card>
          <a href="https://www.tkqlhce.com/ag106biroiq57678D76DB57799DDCC" target='_blank' rel='nofollow noreferrer'>
            <Image src="/images/interserver-1.gif" alt="zebracat AI" width={0} height={0} layout='responsive' style={{ width: '100%', height: 'auto' }}/>
          </a>
        </Card> 

        <Card>
          <a href="https://www.zebracat.ai?via=kcgod" target='_blank' rel='nofollow noreferrer'>
            <Image src="/images/zebracat.jpeg" alt="zebracat AI" width={0} height={0} layout='responsive' style={{ width: '100%', height: 'auto' }}/>
          </a>
        </Card> 
        
        <Card>
          <a href="https://textcortex.com?via=kcgod" target='_blank' rel='nofollow noreferrer'>
            <Image src="/images/text-cortext.jpeg" alt="Text Cortext, AI-powered writing assistant" width={0} height={0} layout='responsive' style={{ width: '100%', height: 'auto' }} />
          </a>
        </Card> */}

        {rightAreaSlot}
        <FaceBookPage />
        <Live2D />
      </div>
    </div>
  )
}
