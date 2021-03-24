using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Others
{
    public static class Sha1Pbkdf2
    {
        /// <summary>
        /// Constants
        /// </summary>
        private const int SaltByteSize = 32;
        private const int HashByteSize = 32;
        private const int Pbkdf2Iterations = 1000;
        private static byte[] _salt;
        /// <summary>
        /// Creates a salted PBKDF2 hash of the password.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        /// <returns>The hash of the password.</returns>
        public static string CreatePasswordHash(string password)
        {
            // Generate a random salt
            var csprng = new RNGCryptoServiceProvider();
            _salt = new byte[0];
            _salt = new byte[SaltByteSize];
            csprng.GetBytes(_salt);
            // Hash the password and encode the parameters
            var hash = Pbkdf2(password, _salt, Pbkdf2Iterations, HashByteSize);
            return Convert.ToBase64String(_salt) + ":" + Convert.ToBase64String(hash.ToArray());
        }
        /// <summary>
        /// Computes the PBKDF2-SHA1 hash of a password.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        /// <param name="salt">The salt.</param>
        /// <param name="iterations">The PBKDF2 iteration count.</param>
        /// <param name="outputBytes">The length of the hash to generate, in bytes.</param>
        /// 
        /// <returns>A hash of the password.</returns>
        private static IList<byte> Pbkdf2(string password, byte[] salt, int iterations, int outputBytes)
        {
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt) { IterationCount = iterations };
            return pbkdf2.GetBytes(outputBytes);
        }
        /// <summary>
        /// Validates a password given a hash of the correct one.
        /// </summary>
        /// <param name="password">The password to check.</param>
        /// <param name="correctHash">A hash of the correct password.</param>
        ///  /// <param name="salt">Salt key.</param>
        /// <returns>True if the password is correct. False otherwise.</returns>
        public static bool ValidatePassword(string password, string correctHash, string salt)
        {
            var hash = Convert.FromBase64String(correctHash);
            var compareHash = Pbkdf2(password, Convert.FromBase64String(salt), Pbkdf2Iterations, hash.Length);
            return SlowEquals(hash, compareHash);
        }
        /// <summary>
        /// Compares two byte arrays in length-constant time. This comparison
        /// method is used so that password hashes cannot be extracted from
        /// on-line systems using a timing attack and then attacked off-line.
        /// </summary>
        /// <param name="a">The first byte array.</param>
        /// <param name="b">The second byte array.</param>
        /// <returns>True if both byte arrays are equal. False otherwise.</returns>
        private static bool SlowEquals(IList<byte> a, IList<byte> b)
        {
            var diff = (uint)a.Count ^ (uint)b.Count;
            for (var i = 0; i < a.Count && i < b.Count; i++)
                diff |= (uint)(a[i] ^ b[i]);
            return diff == 0;
        }
    }
}
