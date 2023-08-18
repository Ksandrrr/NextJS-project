import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={1}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="24" y="-34" rx="0" ry="0" width="303" height="223" /> 
    <rect x="169" y="2" rx="0" ry="0" width="0" height="82" />
  </ContentLoader>
)

export default MyLoader