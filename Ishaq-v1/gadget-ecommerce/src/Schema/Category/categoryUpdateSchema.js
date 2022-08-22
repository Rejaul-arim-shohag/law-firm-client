import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/svg+xml'];
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','image/webp','image/svg+xml'];
export const categoryUpdateSchema = yup.object().shape({
    name: yup.string().required(),
    img: yup.lazy((value) => {
        if (value.length !== 0) {
            return yup.mixed()
                .test(
                    "fileSize",
                    "Please upload a photo smaller than 100KB.",
                    value => value && (value.length > 0 && value[0]?.size <= 100000))
                .test(
                    "fileFormat",
                    "Only SVG up to 100KB",
                    value => value && SUPPORTED_FORMATS.includes(value[0]?.type)
                )
        }
        return yup.mixed().notRequired().nullable();
    })


});

