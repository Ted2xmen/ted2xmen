import { useSSG } from 'nextra/ssg'
 
export const getStaticProps = async({ params }) => {
  return await fetch(`https://api.github.com/repos/ted2xmen/ted2xmen`)
    .then(res => res.json())
    .then(repo => ({
      props: {
        // We add an `ssg` field to the page props,
        // which will be provided to the Nextra `useSSG` hook.
        ssg: {
          stars: repo.stargazers_count
        }
      },
      // The page will be considered as stale and regenerated every 60 seconds.
      revalidate: 260
    }))
}
 
export const Bookmarks = () => {
  // Get the data from SSG, and render it as a component.
  const { stars } = useSSG()
  return <strong>{stars}</strong>
}

export default Bookmarks
