import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/svg+xml'];
export const categorySchema = yup.object().shape({
    name: yup.string().required(),
    img: yup.mixed()
        .test(
            "fileSize",
            "Please upload a photo smaller than 100KB.",
            value => value && (value.length > 0 && value[0]?.size <= 100000))
        .test(
            "fileFormat",
            "SVG up to 100KB",
            value => value && SUPPORTED_FORMATS.includes(value[0]?.type)
        )
});

