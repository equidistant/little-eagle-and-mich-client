import { useState } from 'react'
import styled from 'styled-components'
import { coverWeekendImg } from '../images'
import { H1, Subheading,  RecommendedBlogs, AllBlogs, GalleryList } from '../components'
import useSWR, { mutate } from 'swr'
import { paginate, useRandomGallery, getRandomInt } from '../common'

export async function getServerSideProps() {
  console.log('was here')
  const resWeekendPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?tags=weekend`)
  const weekendPosts = await resWeekendPost.json()

  const resWeekendGalleries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?tags=weekend`)
  const weekendGalleries = await resWeekendGalleries.json()
 
  let index = [getRandomInt(weekendPosts.length), getRandomInt(weekendPosts.length)]
  // while (index[0] === index[1]) {
  //   index = [getRandomInt(weekendPosts.length), getRandomInt(weekendPosts.length)]
  // }
  // const recommendedPosts = [weekendPosts[index[0]], weekendPosts[index[1]]]

  return {
    props: {}
  }
  // return {
  //   props: {
  //     recommendedPosts,
  //     posts: weekendPosts,
  //     galleries: weekendGalleries
  //   }
  // }
}

const fetcher = async (url) => {
    const response = await fetch(url)
    if (response.status === 404) {
      throw new Error('Not found.')
    }
    return response.json()
}

const HomePage = ({ posts, recommendedPosts, galleries }) => {
	return (
    <Root>
        Distant
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  padding-bottom: 100px;
`

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(28, 57, 74, 0.3), rgba(28, 57, 74, 0.3)), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const HeadersRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 940px;
`

const HeadersCenter = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`

const PSubheading = styled(Subheading)`
  width: 95%;
  margin-top: 25px;
`

const SubheadingButton = styled.button`
  border: 3px solid #E8A87C;
  border-radius: 20px 2px;
  width: 231px;
  height: 40px;
  background: transparent;
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  color: #FFFCF9;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);

  margin-top: 25px;
  margin-left: 160px;
  cursor: pointer;
  background: #E8A87C;
`

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default HomePage