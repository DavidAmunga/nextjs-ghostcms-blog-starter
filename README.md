This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that has [Ghost CMS](https://ghost.org) as its backend and uses Disqus service as Comments


## Ghost CMS Setup Config
You can quickly setup a Ghost Instance on Heroku as below or use your own instance


[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)]( https://heroku.com/deploy?template=https://github.com/snathjr/ghost-on-heroku)


Once done setup a .env file on the root of the project with the following variables from your Ghost Setup.


```bash
CONTENT_API_KEY=YOUR_GHOST_API_KEY

BLOG_URL=YOUR_BLOG_URL
```

## Getting Started

Install all the dependencies
```bash
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel


<a href="https://vercel.com/new/git/external?repository-url=[https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world](https://github.com/DavidAmunga/nextjs-ghostcms-blog-starter.git)"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

