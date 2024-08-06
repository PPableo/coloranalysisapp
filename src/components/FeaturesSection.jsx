import Container from "./Container"
import React from "react"
import ColorQuestions from "./ColorQuestions"

const FeatureCard = ({ icon, title, description }) => (
  <div className="w-full px-4 md:w-1/3 lg:w-1/3">
    <div className="mb-9 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mx-auto fill-white bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
        {icon}
      </div>
      <h4 className="text-dark mb-4 text-2xl font-semibold">{title}</h4>
      <p className="mt-8 text-gray-700 light:text-gray-300 text-xl">
        {description}
      </p>
    </div>
  </div>
)

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M47.493 18.98H45c-.595-8.58-6.2-15.329-13.007-15.329s-12.412 6.751-13 15.329h-2.486a1 1 0 0 0-1 1v3c0 9.481 6.865 17.239 15.493 17.8v14.556h-7.191a1.929 1.929 0 0 0-1.927 1.927v1.158a1.93 1.93 0 0 0 1.927 1.928h16.343a1.93 1.93 0 0 0 1.927-1.928v-1.158a1.929 1.929 0 0 0-1.927-1.927H33V40.783c8.627-.564 15.492-8.322 15.492-17.8v-3a1 1 0 0 0-.999-1.003zm-7.414 39.369h-16.2v-1.013h16.2zm-8.086-52.7c6.1 0 11.064 6.653 11.064 14.831s-4.964 14.833-11.064 14.833-11.064-6.653-11.064-14.831S25.892 5.651 31.993 5.651zm14.5 17.328c0 8.744-6.5 15.858-14.492 15.858s-14.494-7.112-14.494-15.856v-2h1.441c.207 9.049 5.971 16.333 13.044 16.333s12.839-7.283 13.045-16.332h1.455z" />
          <path d="M28.792 21.829a1 1 0 0 0 .779-.372l5.795-7.185a1 1 0 1 0-1.557-1.256L28.015 20.2a1 1 0 0 0 .777 1.628zM28.792 29.015a1 1 0 0 0 .779-.372l5.795-7.187A1 1 0 1 0 33.81 20.2l-5.795 7.186a1 1 0 0 0 .777 1.628z" />
        </svg>
      ),
      title: "Skin Undertone Analysis",
      description:
        "Determine your skin's underlying hue – warm, cool, or neutral. We blend Western theory with Korean expertise in subtle skin tones for a precise color foundation."
    },
    {
      icon: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M49.616 16.049a2.139 2.139 0 0 0-.6-1.849l-5.561-5.565A7.663 7.663 0 0 0 38.009 6.1 8.3 8.3 0 0 0 32.4 8.635L8.928 32.1a9.04 9.04 0 0 0-2.786 6.055A7.472 7.472 0 0 0 8.59 43.5l5.565 5.566a2.062 2.062 0 0 0 1.845.595l7.949 7.95a1 1 0 1 0 1.417-1.411l-7.655-7.656 1.806-1.806 7.656 7.655a1 1 0 1 0 1.414-1.414l-7.656-7.655 1.806-1.806 7.656 7.656a1 1 0 0 0 1.414-1.414l-7.656-7.66 1.805-1.8 7.656 7.656a1 1 0 0 0 1.414-1.414l-7.656-7.66 1.806-1.806 7.656 7.656a1 1 0 0 0 1.414-1.414l-7.656-7.656 1.81-1.806 7.656 7.656a1 1 0 0 0 1.41-1.412l-7.656-7.658 1.806-1.806 7.656 7.656a1 1 0 0 0 1.414-1.414l-7.656-7.656 1.806-1.806 7.656 7.656a1 1 0 0 0 1.414-1.414L40.249 26l1.807-1.8 7.656 7.657a1 1 0 1 0 1.414-1.414l-7.656-7.661 1.805-1.805 7.656 7.656a1 1 0 1 0 1.414-1.414l-7.656-7.656 1.811-1.807 7.656 7.657A1 1 0 0 0 57.565 24zM8.142 38.16a7.18 7.18 0 0 1 2.2-4.641l23.47-23.471a6.421 6.421 0 0 1 4.2-1.952 5.754 5.754 0 0 1 4.032 1.953l1.991 1.991-32.04 32.037L10 42.086a5.554 5.554 0 0 1-1.858-3.926zm5.267 7.331 32.038-32.037 2.159 2.159a.163.163 0 0 1 0 .205L18.921 44.5a.406.406 0 0 0-.223.223l-2.927 2.927a.126.126 0 0 1-.2 0z" />
        </svg>
      ),
      title: "Seasonal Color Harmony",
      description:
        "Identify your seasonal color type with a twist. We combine Western seasons with Korean subtypes for a nuanced palette that complements your features."
    },
    {
      icon: (
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M21.585 57.467h20.831a2.228 2.228 0 0 0 2.226-2.226V43.8a2.228 2.228 0 0 0-2.226-2.226h-.5a2.152 2.152 0 0 0 .023-.226V24.607a2.228 2.228 0 0 0-2.226-2.225H38.5V9.489a2.732 2.732 0 0 0-.727-2.228 2.638 2.638 0 0 0-1.936-.727c-1.868 0-4.428 1.4-6.681 3.652-2.177 2.177-3.806 4.936-3.649 6.958v5.239h-1.216a2.228 2.228 0 0 0-2.226 2.225v16.746a2.152 2.152 0 0 0 .023.226h-.5a2.228 2.228 0 0 0-2.229 2.22v11.441a2.228 2.228 0 0 0 2.226 2.226zM30.568 11.6c2.107-2.106 4.207-3.066 5.267-3.066a.809.809 0 0 1 .521.142c.5.5-.223 3.086-2.924 5.789-2.107 2.107-4.207 3.066-5.267 3.066a.811.811 0 0 1-.522-.142c-.504-.506.223-3.089 2.925-5.789zM27.5 19.464a3.3 3.3 0 0 0 .664.066c1.868 0 4.428-1.4 6.681-3.652a17.335 17.335 0 0 0 1.655-1.915v8.418h-9zm-3.437 21.89V24.607a.226.226 0 0 1 .226-.225H39.71a.226.226 0 0 1 .226.225v16.747a.226.226 0 0 1-.226.226H24.291a.226.226 0 0 1-.226-.226zM21.359 43.8a.226.226 0 0 1 .226-.226h20.831a.226.226 0 0 1 .226.226v11.441a.226.226 0 0 1-.226.226H21.585a.226.226 0 0 1-.226-.226z" />
          <path d="M37.9 28.5a1 1 0 0 0-1 1v7.375a1 1 0 1 0 2 0V29.5a1 1 0 0 0-1-1zM40.4 53.5a1 1 0 0 0 1-1v-5.562a1 1 0 0 0-2 0V52.5a1 1 0 0 0 1 1z" />
        </svg>
      ),
      title: "Personal Color Dimensions",
      description:
        "Uncover your ideal hue, value, and chroma. Our hybrid approach reveals the most flattering color characteristics for your unique appearance."
    }
    // ... add other features here
  ]

  return (
    <Container>
      <section
        id="features"
        className="max-w-7xl mx-auto py-12 px-6 md:px-12 xl:px-6"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Illuminate Your Confidence
                </span>
                <h2 className="text-dark mb-2 text-2xl leading-[1.2] semi-bold sm:text-2xl md:text-[30px]">
                  Discover Your Authentic Hues, Amplify Your Confidence
                </h2>
                <p className="mt-4 text-gray-700 light:text-gray-300 text-xl">
                  Blending Western precision with Korean harmony for your
                  perfect palette{" "}
                </p>
              </div>
            </div>
          </div>
          <ColorQuestions />
          <div className="-mx-4 flex flex-wrap">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default FeaturesSection
