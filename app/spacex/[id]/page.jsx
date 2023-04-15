import { LaunchDetail } from '@/components/spacex/LaunchDetail'
import React from 'react'

const SpaceXDetailPage = ({ params }) => {
  return (
    <LaunchDetail id={ params.id }/>
  )
}

export default SpaceXDetailPage