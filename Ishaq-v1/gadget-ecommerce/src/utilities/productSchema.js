import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','image/webp','image/svg+xml'];
export const productSchema = yup.object().shape({
    name: yup.string().required(),
    min_order: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    available: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    price: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").typeError("Please provide a value between (0-9)."),
    description: yup.string().required(),
    image: yup.mixed()
        .test(
            "fileSize",
            "Please upload a photo smaller than 100KB.",
            value => value && (value.length > 0 && value[0]?.size <= 100000))
        .test(
            "fileFormat",
            "PNG, JPG, JPEG,SVG,webp up to 100KB",
            value => value && SUPPORTED_FORMATS.includes(value[0]?.type)
        )
});

