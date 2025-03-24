const zod = require("zod");

async function inputValidation(req, res, next) {
  try {
    //Input Validation
    const RequiredAuth = z.object({
      name: z
        .string()
        .regex(
          /^[A-Za-z\s'-]+$/,
          "Name can only contain letters, spaces, hyphens, and apostrophes"
        ),
      email: z.string().email(),
      password: z.string().min(3),
    });

    const validAuth = RequiredAuth.safeParse(req.body);

    if (!validAuth.success) {
      return res.json({
        message: "Invalid Cred",
        error: validAuth.error,
      });
    }
    // Auth check successful
    next();
  } catch (error) {
    return res.json({
      message: "Error Creating Account",
      error: error.message,
    });
  }
}

module.exports = inputValidation;
