import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={2160}
    height={200}
    viewBox="0 0 2040 200"
    backgroundColor="#ffffff"
    foregroundColor="#F4DCEC"
    {...props}
  >
    <rect x="129" y="26" rx="0" ry="0" width="0" height="50" /> 
    <rect x="266" y="136" rx="0" ry="0" width="47" height="0" /> 
    <rect x="-203" y="-3" rx="0" ry="0" width="892" height="320" /> 
    <rect x="56" y="120" rx="0" ry="0" width="193" height="0" />
  </ContentLoader>
)

export default MyLoader