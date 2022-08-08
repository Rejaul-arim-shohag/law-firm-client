import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/svg+xml'];
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','image/webp','image/svg+xml'];
export const brandSchema = yup.object().shape({
    name: yup.string().required(),
    des: yup.string().required(),
    img: yup.mixed()
        .test(
            "fileSize",
            "Please upload a photo smaller than 100KB.",
            value => value && (value.length > 0 && value[0]?.size <= 100000))
        .test(
            "fileFormat",
            "Only SVG file up to 100KB",
            value => value && SUPPORTED_FORMATS.includes(value[0]?.type)
        )
});

