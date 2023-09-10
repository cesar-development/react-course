import { Field, Formik, Form } from 'formik'
import usePhotos from './hooks/use-photos'
import Photo from './components/Photo'

function App() {
  const { photos, fetchPhotos, isLoading } = usePhotos()

  const handleOpenPhoto = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <header>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={async (values) => {
            await fetchPhotos(values.search)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>

      <div className='container'>
        <div className='center'>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            photos.map((photo) => (
              <Photo
                key={photo.id}
                photo={photo}
                onOpenPhoto={() => handleOpenPhoto(photo.urls.regular)}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default App
