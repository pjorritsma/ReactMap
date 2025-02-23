import { gql } from '@apollo/client'

const getAllDevices = gql`
  query Devices($filters: JSON) {
    devices(filters: $filters) {
      id
      instance_name
      last_seen
      last_lat
      last_lon
      route
      type
      isMad
      radius
    }
  }
`

export default getAllDevices
