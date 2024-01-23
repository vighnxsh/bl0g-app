import React, { useCallback } from 'react';
import { get, set, useForm } from 'react-hook-form';
import { Select, Button, Input, Logo, RTE } from '../index';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.slug || "",
            status: post?.status || active,
        }
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);


    const onSubmit = async (data) => {
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null
            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }


            })
        }
        else {
            const file = await appwriteService.uploadFile(data.image[0]);


            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }

        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9-]+/g, "-")
                .replace(/\s/g, "-")

            return ''
        }
    })

    React.useEffect(() => {

        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value))
            }
        })

        return () => {
            subscription.unsubscribe()
        }

    }, [watch, slugTransform, setValue])



return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
                <Input
                    label="Title"
                    placeholder="Post Title"
                    className="mb-4"
                    {...register("title", {
                        required: true,

                    })}
                />
                <Input
                    label="Slug"
                    placeholder="Post Slug"
                    className="mb-4"
                    {...register("slug", {
                        required: true,

                    })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.target.value)), {
                            shouldValidate: true,
                        }
                    }}
                />
                <RTE
                    label="Content"
                    name="content"
                    control={control}
                    placeholder="Post Content"
                    className="mb-4"
                    defaultValue={getValues("content")}
                />
                <div className="flex flex-row space-x-4">
                    <Input
                        label="Featured Image"
                        type="file"
                        className="mb-4"
                        accept="image/png ,image/jpeg , image/gif"
                        placeholder="Post Status"
                        {...register("image", {
                            required: !post,
                        })}
                    />
                    {post && (
                        <div className="flex flex-col space-y-4">
                            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title}
                                className='rounded-lg' />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className='mb-4'
                        {...register("status", {
                            required: true,
                        })
                        }
                    />
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined}>
                        {post ? "Update" : "Submit"}
                        </Button>
                </div>

            </div>
        </form>
    </div>
)
                    }
export default PostForm;