import { GetStaticProps } from "next";
import { sanityClient, urlFor } from '../../sanity';
import Image from "next/image";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";
import { useState } from "react";
import { Product } from "../../typings";
import Link from "next/link";


interface Props {
  product: Product;
}


interface IFormInput {
  _id: string
  name: string
  mobno: string
  service: string
}

function Product({ product }: Props) {
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }


  return (

    <main className="bg-white">
      <header className="flex  ml-auto mr-auto text-center lg:ml-auto lg:mr-auto lg:text-center">
        <Link href='/'>
         <img src='/logo.png' className="h-[100px]" />
         </Link>
         <h1 className="font-bold font-mono xl:text-4xl mt-[30px]  lg:text-3xl text-2xl mb-2 capitalize">
                Service For: {product.title}
              </h1>
      </header>
      <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
        <div className="max-w-screen-xl flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <div className="mx-auto">
              <Image
                src={urlFor(product.image[0]).url()!}
                alt=""
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>

            <div className="flex-grow xl:max-w-2xl mt-[-100px] ml-auto mr-auto text-center lg:max-w-xl  md:max-w-md">
             
              <div className="mt-10 flex xs:flex-row flex-col sm:gap-8 gap-6">

                <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
                {submitted ? (
                  <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
                    <h3 className="text-3xl font-bold">
                      Thank you for submitting your comment!
                    </h3>
                    <p>Once it has been approved, it will appear below!</p>
                  </div>
                ) : (
                  <form
                    className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h3 className="text-sm text-yellow-500">Select your issue and</h3>
                    <h4 className="text-3xl font-bold">Place an ORDER!</h4>
                    <hr className="mt-2 py-3" />
                    <input
                      type="hidden"
                      {...register('_id')}
                      name="_id"
                      value={product._id}
                    />
                    <label className="mb-5 block">
                      <span className="text-gray-700 font-mono">Name</span>
                      <input
                        {...register('name', { required: true })}
                        className="form-input mt-[10px] block w-full rounded border py-2 px-3 shadow ring-yellow-500"
                        placeholder="Enter your Name"
                        type="text"
                      />
                    </label>
                    <label className="mb-5 block">
                      <span className="text-gray-780 font-mono">Mobile No.</span>
                      <input
                        {...register('mobno', { required: true })}
                        className="form-input mt-[10px]  block w-full rounded border py-2 px-3 shadow ring-yellow-500"
                        placeholder="Enter Your Mobile No"
                        type="text"
                      />
                    </label>

                    <label className="font-bold text-xl" htmlFor="service-1">
                    <input
                        {...register("service")}
                        type="radio"
                        value={product.services[0]}
                        id="service-1"
                        className="mt-[10px] w-6 h-3 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {product.services[0]}
                </label>
                <label className="font-bold text-xl" htmlFor="service-2">
                    <input
                        {...register("service")}
                        type="radio"
                        value={product.services[1]}
                        id="service-2"
                        className="mt-[10px] w-6 h-3 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {product.services[1]}
                </label>
                <label className="font-bold text-xl" htmlFor="service-3">
                    <input
                        {...register("service")}
                        type="radio"
                        value={product.services[2]}
                        id="service-3"
                        className="mt-[10px] w-6 h-3 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {product.services[2]}
                </label>
                <label className="font-bold text-xl" htmlFor="service-4">
                    <input
                        {...register("service")}
                        type="radio"
                        value={product.services[3]}
                        id="service-3"
                        className="mt-[10px] w-6 h-3 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {product.services[3]}
                </label>
                <label className="font-bold text-xl" htmlFor="service-4">
                    <input
                        {...register("service")}
                        type="radio"
                        value={product.services[4]}
                        id="service-3"
                        className="mt-[10px] w-6 h-3 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {product.services[4]}
                </label>
                    {/* <label className="mb-5 block">
                      <span className="text-gray-780 font-mono">Service</span>
                      <select className="bg-gray-50 border mt-[10px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option {...register("service")} value={product.services}>{product.services[0]}</option>
                        <option {...register("service")} value={product.services}>{product.services[1]}</option>
                        <option {...register("service")} value={product.services}>{product.services[2]}</option>
                        <option {...register("service")} value={product.services}>{product.services[3]}</option>
                        <option {...register("service")} value={product.services}>{product.services[4]}</option>


                      </select>
                    </label> */}


                    <div className="flex flex-col p-5">
                      {errors.name && <p className="text-red-500">*Name is required</p>}
                      {errors.mobno && (
                        <p className="text-red-500 mt-[10px]">*Mob.No is required</p>
                      )}
                      {errors.service && (
                        <p className="text-red-500">Service is required</p>
                      )}
                    </div>
                    <input
                      type="submit"
                      className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
                    />
                    
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Comment */}
      <div className="my-5 mx-auto flex max-w-2xl mt-[-100px] flex-col space-y-2 p-10 shadow shadow-green-500">
        <h3>Inquire on Whatsapp</h3>
        <hr />
              <a href={`https://web.whatsapp.com/send?phone=7499247072&text=Hello!, I want to inquire about my 
                                ${''}${''}
                ${product.title}&app_absent=0`}
                className="focus:shadow-outline cursor-pointer rounded bg-green-500 py-2 px-4 font-bold text-white shadow hover:bg-green-400 focus:outline-none">
                Whatsapp
              </a>
      </div>




    </main>
  )
}

export default Product;


export const getStaticPaths = async () => {
  const query = `*[_type =="product"]{
        _id,
        slug{
        current
      },
      title,
      'orders':*[_type=='order' && 
      product._ref==^._id ],
      services,
      price
        
      }`;
  const products = await sanityClient.fetch(query);

  const paths = products.map((product: Product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =="product" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    'orders':*[_type=='order' && 
    product._ref==^._id ],
    services,
    image,
    price,
    services,
    slug
  }`
  const product = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!product) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      product,
    },
    revalidate: 60, //after 60 seconds, update the old cached version!
  }
}